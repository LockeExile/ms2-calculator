export type CharacterClass = "Knight" | "Berserker" | "Wizard" | "Priest" | "Archer" | "Heavy Gunner" | "Thief" | "Assassin" | "Rune Blader" | "Striker" | "Soul Binder";

export type Constant = {
    readonly Knight: number;
    readonly Berserker: number;
    readonly Wizard: number;
    readonly Priest: number;
    readonly Archer: number;
    readonly "Heavy Gunner": number;
    readonly Thief: number;
    readonly Assassin: number;
    readonly "Rune Blader": number;
    readonly Striker: number;
    readonly "Soul Binder": number;
};

export const paMajorFactor: Constant = {
    Knight: 0.09,
    Berserker: 0.09,
    Wizard: 0.06,
    Priest: 0.06,
    Archer: 0.09,
    "Heavy Gunner": 0.09,
    Thief: 0.09,
    Assassin: 0.09,
    "Rune Blader": 0.09,
    Striker: 0.09,
    "Soul Binder": 0.06
};

export const paMinorFactor: Constant = {
    Knight: 0.025,
    Berserker: 0.025,
    Wizard: 0.025,
    Priest: 0.025,
    Archer: 0.025,
    "Heavy Gunner": 0.025,
    Thief: 0.025,
    Assassin: 0.025,
    "Rune Blader": 0.025,
    Striker: 0.025,
    "Soul Binder": 0.025
};

export const maIntFactor: Constant = {
  Knight: 0.05,
  Berserker: 0.05,
  Wizard: 0.081,
  Priest: 0.0675,
  Archer: 0.05,
  "Heavy Gunner": 0.05,
  Thief: 0.05,
  Assassin: 0.05,
  "Rune Blader": 0.081,
  Striker: 0.05,
  "Soul Binder": 0.081
};

export const critRateFactor: Constant = {
    Knight: 3.78,
    Berserker: 4.305,
    Wizard: 3.40375,
    Priest: 7.34125,
    Archer: 6.4575,
    "Heavy Gunner": 2.03875,
    Thief: 0.60375,
    Assassin: 0.55125,
    "Rune Blader": 3.78,
    Striker: 2.03875,
    "Soul Binder": 3.40375
};

export type Target = "Pyrros Fard";
export type TargetConstant = {
    readonly "Pyrros Fard": number;
    readonly "Devorak": number;
};

export const defense: TargetConstant = {
    "Pyrros Fard": 567,
    "Devorak": 681
};

export const pmResistance: TargetConstant = {
    "Pyrros Fard": 120,
    "Devorak": 249
};

export const critEvasion: TargetConstant = {
    "Pyrros Fard": 50,
    "Devorak": 50
};