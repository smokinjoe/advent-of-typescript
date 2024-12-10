enum Gift {
  Coal,
  Train,
  Bicycle = Train * 2,
  SuccessorToTheNintendoSwitch = Bicycle * 2,
  TikTokPremium = SuccessorToTheNintendoSwitch * 2,
  Vape = TikTokPremium * 2,
  Traditional = Train | Bicycle,
  OnTheMove = Coal | Bicycle | TikTokPremium | Vape,
  OnTheCouch = Coal | SuccessorToTheNintendoSwitch | TikTokPremium | Vape,
}
