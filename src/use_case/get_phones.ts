export interface Phone {
    phone: string;
    visible: string;
    email?: string;
}

export interface Phones {
    reservations: Phone;
    resort: Phone;
    wedding_groups: Phone;
    transportation: Phone;
    management: Phone;
}

const USA = {
    "reservations": {
        "phone": "18007914419",
        "visible": "1 800 791 4419",
        "email": "contact@grandresidencesrivieracancun.com"
    },
    "resort": {
        "phone": "9988728130",
        "visible": "998 872 81 30",
    },
    "wedding_groups": {
        "phone": "8888401108 ",
        "visible": "888-840-1108 ",
        "email": "groups.weddings@royalresorts.com"
    },
    "transportation": {
        "phone": "18448865383",
        "visible": "844 886 53 83",
        "email": "ask4help@royalresorts.com"
    },
    "management": {
        "phone": "19547365879",
        "visible": "1 954 736 5879",
    }
};
const MX = {
    "reservations": {
        "phone": "8000085252",
        "visible": "800 0085 252",
        "email": "contact@grandresidencesrivieracancun.com"
    },
    "resort": {
        "phone": "9988728130",
        "visible": "998 872 81 30",
        "email": ""
    },
    "wedding_groups": {
        "phone": "8000204986",
        "visible": "800-020-4986",
        "email": "groups.weddings@royalresorts.com"
    },
    "transportation": {
        "phone": "8008909710",
        "visible": "800 890 97 10",
        "email": "ask4help@royalresorts.com"
    },
    "management": {
        "phone": "19547365879",
        "visible": "1 954 736 5879",
        "email": ""
    }
};
const CAN = {
    "reservations": {
        "phone": "529988728148",
        "visible": "+52 998 872 81 48",
        "email": "contact@grandresidencesrivieracancun.com"
    },
    "resort": {
        "phone": "9988728130",
        "visible": "998 872 81 30",
        "email": ""
    },
    "wedding_groups": {
        "phone": "9547365881",
        "visible": "52 954-736-5881",
        "email": "groups.weddings@royalresorts.com"
    },
    "transportation": {
        "phone": "529988728148",
        "visible": "+52 998 872 81 48",
        "email": "ask4help@royalresorts.com"
    },
    "management": {
        "phone": "19547365879",
        "visible": "1-954-736-5879",
        "email": ""
    }

};
const INT = {
    "reservations": {
        "phone": "529988728148",
        "visible": "+52 998 872 81 48",
        "email": "contact@grandresidencesrivieracancun.com"
    },
    "resort": {
        "phone": "9988728130",
        "visible": "998 872 81 30",
        "email": ""
    },
    "wedding_groups": {
        "phone": "52 998 8810174",
        "visible": "52 (998) 8810174",
        "email": "groups.weddings@royalresorts.com"
    },

    "transportation": {
        "phone": "529988728148",
        "visible": "+52 998 872 81 48",
        "email": "ask4help@royalresorts.com"
    },
    "management": {
        "phone": "19547365879",
        "visible": "1-954-736-5879",
        "email": ""
    }
}

export const getPhones = (country: string): Phones => {
    switch (country) {
        case "MX":
            return MX;
        case 'US':
            return USA;
        case 'CAN':
            return CAN;
        default:
            return INT
    }
};