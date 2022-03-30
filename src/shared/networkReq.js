import data from "../data/images";

const networkReq = payload => {
  const response = data.filter(item => {
    return item.id === payload.avatarID;
  });
  const cb = resolve => {
    return () => {
      resolve(response[0]);
    };
  };
  return new Promise(resolve => setTimeout(cb(resolve), 1000));
};

export default networkReq;
