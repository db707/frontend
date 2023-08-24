export interface ShowSeekerInterface {
    seekerid: number;
    applyid: number;
    firstname: string;
    lastname: string;
    date: Date;
}
export interface ShowSeekerDetailsInterface {
    seekerid: number;
    applyid: number
    personaldescription: string;
    experiencedescription: string;
    email: string;
    firstname: string;
    lastname: string;
}

export interface ApplySeekerInterface {
    firstname: string;
    lastname: string;
    experiencedescription: string;
    personaldescription: number;
    email: string;
}
