/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SampleComponents1_user = {
    readonly name: string | null;
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
        }
    ],
    "type": "User",
    "abstractKey": null
} as any);
(node as any).hash = '8b43e28304d2860d8ffa5d78d51f689d';
export default node;
