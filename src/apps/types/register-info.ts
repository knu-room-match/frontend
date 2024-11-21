// 수면 관련 정보
export interface RegisterInfoSleepProperties {
    wakeUpTime: number[]; // 기상 시간 (4-12)
    sleepTime: number[]; // 취침 시간 (21-29)
    sleepNoiseResist: string; // 취침 소음 민감도 (bright, normal, dark)
    sleepLight: string; // 수면 시 조명 (none, sleeplight, stand)
    alarmSetting: string; // 알람 설정 (none, every10min, once)
    sleepHabit: string[]; // 수면 습관 (teeth, nose, sleeptalking, wriggle)
}

// 환경 관련 정보
export interface RegisterInfoEnvProperties {
    heat: number[]; // 더위 민감도 (1-5)
    cold: number[]; // 추위 민감도 (1-5)
    dirty: number[]; // 청결도 (1-5)
    cleanCycle: string; // 청소 주기 (weekly, 3-4times, daily)
    showerDuration: string; // 샤워 시간 (5min, 10min, 15min, 20min, 25min, 30min, 40min)
    bug: string; // 벌레 민감도 (hate, dislike, mid, catch, like)
}

// 관계 관련 정보
export interface RegisterInfoRelationProperties {
    roomMateRelation: number[]; // 룸메이트와의 관계 (1-5)
    roomMateShare: string; // 물건 룸메이트와의 공유 여부 (hate, approval, regardless)
    friendsInvitation: string; // 친구 초대 여부 (regardless, acquaintance, approval, hate)
    returnHomeFrequency: string; // 귀가 빈도 (vacation, weekly, 2weekly, monthly)
}

// 취미 관련 정보
export interface RegisterInfoHobbyProperties {
    studyArea: string; // 공부 장소 (dormitory, library, studyroom)
    workoutFrequency: string; // 운동 빈도 (none, sometimes, often, daily)
    workoutTime: string; // 운동 시간 (morning, afternoon, evening, night, none)
    gameType: string; // 게임 종류 (none, sometimes, often, daily)
    alcohol: string; // 음주 여부 (none, sometimes, often, daily)
    smoking: string; // 흡연 여부 (none, ecigar, cigar)
}

// prettier-ignore
export type RegisterInfoProperties = 
    RegisterInfoSleepProperties &
    RegisterInfoEnvProperties &
    RegisterInfoRelationProperties &
    RegisterInfoHobbyProperties;
