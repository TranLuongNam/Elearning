//action creator là một hàm khi nó chạy nó return về một object action
export const createAction = (type, payload) => ({
  type,
  payload,
});
