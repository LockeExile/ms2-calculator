export type CharacterClass = "Archer";
export type Constant = {
    readonly Archer: number;
};

export const primaryAttrFactor: Constant = {
    Archer: 0.63
};

export const secondaryAttrFactor: Constant = {
    Archer: 0.175
};

export const critRateFactor: Constant = {
    Archer: 1/1260
};

export const lukFactor: Constant = {
    Archer: 1/1030
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