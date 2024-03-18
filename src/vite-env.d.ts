/// <reference types="vite/client" />

enum USStates {
    AL = 'Alabama',
    AK = 'Alaska',
    AZ = 'Arizona',
    AR = 'Arkansas',
    CA = 'California',
    CO = 'Colorado',
    CT = 'Connecticut',
    DE = 'Delaware',
    FL = 'Florida',
    GA = 'Georgia',
    HI = 'Hawaii',
    ID = 'Idaho',
    IL = 'Illinois',
    IN = 'Indiana',
    IA = 'Iowa',
    KS = 'Kansas',
    KY = 'Kentucky',
    LA = 'Louisiana',
    ME = 'Maine',
    MD = 'Maryland',
    MA = 'Massachusetts',
    MI = 'Michigan',
    MN = 'Minnesota',
    MS = 'Mississippi',
    MO = 'Missouri',
    MT = 'Montana',
    NE = 'Nebraska',
    NV = 'Nevada',
    NH = 'New Hampshire',
    NJ = 'New Jersey',
    NM = 'New Mexico',
    NY = 'New York',
    NC = 'North Carolina',
    ND = 'North Dakota',
    OH = 'Ohio',
    OK = 'Oklahoma',
    OR = 'Oregon',
    PA = 'Pennsylvania',
    RI = 'Rhode Island',
    SC = 'South Carolina',
    SD = 'South Dakota',
    TN = 'Tennessee',
    TX = 'Texas',
    UT = 'Utah',
    VT = 'Vermont',
    VA = 'Virginia',
    WA = 'Washington',
    WV = 'West Virginia',
    WI = 'Wisconsin',
    WY = 'Wyoming'
}


type Park = {
    //activities available on the park
    activities?: Array<{ id: string, name: string }>,
    //Introductory paragraph from the park homepage
    description: string,
    //information about entrance fees
    entranceFees?: Array<{
        cost: string;
        description: string,
        title: string
    }>
    //Full park name (with designation)
    fullName: string,
    //Park identification string
    id: string,
    //images of the park
    images?: Array<{
        credit: string,
        altText: string,
        title: string,
        caption: string,
        url: string
    }>,
    //Short park name (no designation)
    name: string,
    //A variable width character code used to identify a specific park
    parkCode: string,
}

export { USStates, Park }