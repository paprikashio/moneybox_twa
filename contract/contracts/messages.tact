message MintTarget {
    query_id: Int as uint64;
    name: String;
    amount: Int as uint64;
    deadline: Int as uint64;
    image: String;
}

message ChangeImage {
    query_id: Int as uint64;
    image_source: String;
}

message ChangeName {
    query_id: Int as uint64;
    name: String;
}

struct Goal {
    is_init: Bool;
    name: String;
    amount: Int as uint64;
    deadline: Int as uint64;
    image: String;
}