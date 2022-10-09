import * as Realm from "realm-web";

const REALM_APP_ID = "medafcase-cpsbt";

export const realApp = new Realm.App({ id: REALM_APP_ID });

export const credentials = Realm.Credentials.anonymous();
