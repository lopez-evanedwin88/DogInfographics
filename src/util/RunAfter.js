import _ from "lodash";

export const runAfter = (duration = 0, event = () => {}) => {
  return _.debounce(event, duration);
};
