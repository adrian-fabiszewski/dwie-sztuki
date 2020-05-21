export interface Member {
    first_name: String;
    last_name: String;
    bio: String;
    job_title: String;
    age: Number;
    avatar_url: String;
};

// TODO use this for Members wrapper
export interface CastMembers {
    [key: number]: Member;
}