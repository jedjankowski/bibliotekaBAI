(function() {
    //  Initialize Firebase
    const config = {
        apiKey: "AIzaSyDR2IJ3Ea-4p2I1BQs7AuJDs0EjCEE4IAM",
        authDomain: "baiprojekt-54e2b.firebaseapp.com",
        databaseURL: "https://baiprojekt-54e2b.firebaseio.com",
        projectId: "baiprojekt-54e2b",
        storageBucket: "baiprojekt-54e2b.appspot.com",
        messagingSenderId: "726560257409"
    };
    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //login event listener
    btnLogin.addEventListener('click', e => {
        //pobieranie maila i hasla
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        //zaloguj
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    //rejestracja listener
    //do zrobnienia: sprawdzanie czy mail jest poprawnie wpisany (wzor@mail.com)
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        //zaloguj
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    } );

    btnLogout.addEventListener('click', ev => {
        firebase.auth().signOut();
    });

    //listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('wylogowany');
            btnLogout.classList.add('hide');
        }
    });

}());
