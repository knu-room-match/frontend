// 수면 관련 정보
declare interface RegisterInfoSleepProperties {
    wakeUpTime: number[]; // 기상 시간
    sleepTime: number[]; // 취침 시간
    sleepNoiseResist: number[]; // 취침 소음 민감도
    sleepLight: string; // 수면 시 조명
    alarmSetting: string; // 알람 설정
    sleepHabit: string[]; // 수면 습관
}

// 환경 관련 정보
declare interface RegisterInfoEnvProperties {
    heat: number[]; // 더위 민감도
    cold: number[]; // 추위 민감도
    dirty: number[]; // 청결도
    cleanCycle: string; // 청소 주기
    showerDuration: string; // 샤워 시간
    bug: string; // 벌레 민감도
}

// 관계 관련 정보
declare interface RegisterInfoRelationProperties {
    roomMateRelation: string; // 룸메이트와의 관계
    roomMateShare: string; // 물건 룸메이트와의 공유 여부
    friendsInvitation: string; // 친구 초대 여부
    returnHomeFrequency: string; // 귀가 빈도
}

// 취미 관련 정보
declare interface RegisterInfoHobbyProperties {
    studyArea: string; // 공부 장소
    workoutFrequency: string; // 운동 빈도
    workoutTime: string; // 운동 시간
    gameType: string; // 게임 종류
    alcohol: string; // 음주 여부
    smoking: string; // 흡연 여부
}

// prettier-ignore
declare type RegisterInfoProperties = 
    RegisterInfoSleepType &
    RegisterInfoEnvType &
    RegisterInfoRelationType &
    RegisterInfoHobbyType;
