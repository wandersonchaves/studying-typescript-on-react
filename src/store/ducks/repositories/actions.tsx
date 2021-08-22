import { action } from "typesafe-actions";
// eslint-disable-next-line import/extensions
import { RepositoriesTypes, Repository } from "./types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loadSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCESS, data);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
