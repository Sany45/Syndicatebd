import { initializeApp, getApps, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
}

function createFirebaseAdminApp(config) {
  if (getApps().length === 0) {
    return initializeApp(config)
  } else {
    return getApps()[0]
  }
}

const firebaseAdmin = createFirebaseAdminApp(firebaseAdminConfig)
export const adminDb = getFirestore(firebaseAdmin)
export default firebaseAdmin
