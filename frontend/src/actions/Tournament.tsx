import ICreateTournament from "../interface/Tournament";

export function createTournament(user: ICreateTournament): any {
  // Try to register user
  return (dispatch: any) => {
    dispatch(() => {
      // TODO
      return { type: "CREATE TOURNAMENT REQUESTED" };
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    };
    return fetch("/tournaments/create", requestOptions)
      .then(handleResponse) // Add dispatch(registerFailure())
      .then(() => {
        dispatch(createTournamentSuccessful());
      });
  };
}

// TODO ....
function createTournamentSuccessful() {
  return {
    type: "Create tournament successful"
  };
}

// TODO (Oscar) move to separate file
function handleResponse(response: any) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
