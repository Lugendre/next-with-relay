/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SampleComponents1_user = {
    readonly name: string | null;
    readonly email: string;
    readonly " $refType": "SampleComponents1_user";
};
export type SampleComponents1_user$data = SampleComponents1_user;
export type SampleComponents1_user$key = {
    readonly " $data"?: SampleComponents1_user$data;
    readonly " $fragmentRefs": FragmentRefs<"SampleComponents1_user">;
};



const node: ReaderFragment = ({
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SampleComponents1_user",
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
    "type": "User",
    "abstractKey": null
} as any);
(node as any).hash = '98e4a652616adaa8c370956cdcd76b91';
export default node;
