// -----------------------INSTRUCTIONS

// There's no such thing as private properties on a coffeescript object! But, maybe there are?
//
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
//
// getSecret() which returns the secret
// setSecret() which sets the secret

// example:
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

//------------------------FIRST TRY

function createSecretHolder(secret) {
    return {
        getSecret : function (){
            console.log(secret)
            return secret
        },
        setSecret : function(newSecret){
            secret = newSecret
            console.log(secret)
            return secret
        }
    }
}
let obj = createSecretHolder(5)