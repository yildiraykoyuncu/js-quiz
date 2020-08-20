window.onload = () => {
  // what else should happen when the app is initialized?
  //  ie. before the user can use it
  //  often this will be rendering state to the UI


  // log the initial state
  log.push({
    state: deepClone(state)
  });
  // this log will always
  console.log(log);
};
