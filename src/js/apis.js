import api from "../Services/config";

export function getLandingData(hashId) {
  return api.get(`/landing?hash_id=${hashId}&challenge=MedalOfHonor`)
}

export function registerGame(hashId) {
  return api.post('/register', {challenge: "MedalOfHonor",
      hash_id: hashId})
}

export function claimReward(hashId, missionId) {
  return api.post('/claim', {challenge: "MedalOfHonor", hash_id:hashId ,mission_id: `m${missionId}`})
}
