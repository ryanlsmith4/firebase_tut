const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.tryMessage = functions.firestore
  .document('products/{productId}')
  .onCreate((snapshot, event) => {

    console.log('__________________________')
    console.log(event.data.data())
    const docId = event.params.productId;

    const name = snapshot._fieldsProto.name

    const productRef = admin.firestore().collection('products').doc(docId)

    return productRef.update({ message: `Nice ${name}! - Love Cloud Functions`})

  })

