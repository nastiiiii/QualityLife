// Doctors
// Dr Joker (Jokerge)
// Dr Cena Rayan

const doctors = {
    "JOKER": {
        login: "jokerge@medbay.loc",
        pass: "jokerge123",
        redirect: "/main/joker/john"
    },
    "CENA": {
        login: "cena@medbay.loc",
        pass: "cena123",
        redirect: "/main/cena/rayan"
    }
}

// Patients 
// John Wick
// Rayan Gosling

const patients = {
    "WICK": {
        login: "wick@gmail.com",
        pass: "wick123",
        redirect: "/main/wick/joker"
    },
    "GOSLING": {
        login: "gosling@gmail.com",
        pass: "gosling123",
        redirect: "/main/gosling/cena"
    }
}

const login_redirect = "/"

const verify = (login, pass) => {
    // someone, please shoot me in the head
    for (const [_, outer_value] of Object.entries(doctors)) {
        if (outer_value['login'] == login || outer_value['pass'] == pass) {
            return outer_value['redirect']
        }
    }
    
    for (const [_, outer_value] of Object.entries(patients)) {
        if (outer_value['login'] == login || outer_value['pass'] == pass) {
            return outer_value['redirect']
        }
    }

    return login_redirect
}

export {
    verify
}