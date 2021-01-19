/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserWhereUniqueInput = {
    email?: string | null;
    id?: string | null;
};
export type pages_indexQueryVariables = {
    userID: UserWhereUniqueInput;
};
export type pages_indexQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"SampleComponents1_user">;
    } | null;
};
export type pages_indexQuery = {
    readonly response: pages_indexQueryResponse;
    readonly variables: pages_indexQueryVariables;
};



/*
query pages_indexQuery(
  $userID: UserWhereUniqueInput!
) {
  user(where: $userID) {
    ...SampleComponents1_user
  }
}

fragment SampleComponents1_user on User {
  name
  email
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "userID"
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "where",
            "variableName": "userID"
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "pages_indexQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "SampleComponents1_user"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "pages_indexQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "8ec052df8cb1e131c5741bd94d82d476",
            "id": null,
            "metadata": {},
            "name": "pages_indexQuery",
            "operationKind": "query",
            "text": "query pages_indexQuery(\n  $userID: UserWhereUniqueInput!\n) {\n  user(where: $userID) {\n    ...SampleComponents1_user\n  }\n}\n\nfragment SampleComponents1_user on User {\n  name\n  email\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd311f730a993ae1eb3a11042ee998e44';
export default node;
