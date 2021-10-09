import { merge } from "lodash";
import { userResolvers } from "./User/userResolvers";
import { catResolvers } from "./Cat/catResolvers";
import { viewerResolvers } from "./Viewer/viewerResolvers";

export const resolvers = merge(userResolvers, catResolvers, viewerResolvers);
