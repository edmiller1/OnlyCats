import { merge } from "lodash";
import { userResolvers } from "./User/userResolvers";
import { catResolvers } from "./Cat/catResolvers";

export const resolvers = merge(userResolvers, catResolvers);
