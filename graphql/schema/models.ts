import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
    t.model.role();
  },
});

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.model.id();
    t.model.bio();
    t.model.user();
    t.model.userId();
  },
});

export const Image = objectType({
  name: "Image",
  definition(t) {
    t.model.id();
    t.model.annotationTag();
    t.model.user();
  },
});

export const AnnotationTag = objectType({
  name: "AnnotationTag",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});
