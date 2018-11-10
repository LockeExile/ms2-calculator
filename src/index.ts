import Vue from "vue";
import * as Constants from "./constants";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <table>
            <tr><th></th><th>From Stat Sheet</th><th>From Comparison</th></tr>
            <tr><th>Class</th><td><input v-model="characterClass" type="text"></td></tr>
            <tr><th>Target</th><td><input v-model="target" type="text"></td></tr>
            <tr><th>Strength</th><td><input v-model.number="str" type="number"></td><td><input v-model.number="strDiff" type="number"></td></tr>
            <tr><th>Dexterity</th><td><input v-model.number="dex" type="number"></td><td><input v-model.number="dexDiff" type="number"></td></tr>
            <tr><th>Intelligence</th><td><input v-model.number="int" type="number"></td><td><input v-model.number="intDiff" type="number"></td></tr>
            <tr><th>Luck</th><td><input v-model.number="luk" type="number"></td><td><input v-model.number="lukDiff" type="number"></td></tr>
            <tr><th>Weapon Attack</th><td><input v-model.number="weaponAttack" type="number"></td><td><input v-model.number="weaponAttackDiff" type="number"></td></tr>
            <tr><th>Bonus Attack</th><td><input v-model.number="bonusAttack" type="number"></td><td><input v-model.number="bonusAttackDiff" type="number"></td></tr>
            <tr><th>Physical Attack</th><td><input v-model.number="pmAttack" type="number"></td><td><input v-model.number="pmAttackDiff" type="number"></td></tr>
            <tr><th>Piercing</th><td><input v-model.number="piercing" type="number">%</td><td><input v-model.number="piercingDiff" type="number"></td></tr>
            <tr><th>Physical Piercing</th><td><input v-model.number="pmPiercing" type="number">%</td><td><input v-model.number="pmPiercingDiff" type="number"></td></tr>
            <tr><th>Accuracy</th><td><input v-model.number="accuracy" type="number"></td><td><input v-model.number="accuracyDiff" type="number"></td></tr>
            <tr><th>Critical Rate</th><td><input v-model.number="critRate" type="number"></td><td><input v-model.number="critRateDiff" type="number"></td></tr>
            <tr><th>Critical Damage</th><td><input v-model.number="critDamage" type="number">%</td><td><input v-model.number="critDamageDiff" type="number"></td></tr>
            <tr><th>Damage Bonus</th><td><input v-model.number="damageBonus" type="number">%</td><td><input v-model.number="damageBonusDiff" type="number"></td></tr>
        </table>
        <table>
            <tr><th>Damage Factor</th><td>{{ currentDamageFactor }}</td><td>{{ compareDamageFactor }}</td></tr>
            <tr><th>Expected Crit Rate</th><td>{{ currentExpectedCritRate }}</td><td>{{ compareExpectedCritRate }}</td></tr>
            <tr><th>Crit Factor</th><td>{{ currentCritFactor }}</td><td>{{ compareCritFactor }}</td></tr>
            <tr><th>Defense Factor</th><td>{{ currentDefenseFactor }}</td><td>{{ compareDefenseFactor }}</td></tr>
            <tr><th>Resistance Factor</th><td>{{ currentResistFactor }}</td><td>{{ compareResistFactor }}</td></tr>
            <tr><th>Total Mitigation Factor</th><td>{{ currentMitigationFactor }}</td><td>{{ compareMitigationFactor }}</td></tr>
            <tr><th>Expected Damage</th><td>{{ currentExpectedDamage }}</td><td>{{ compareExpectedDamage }}</td></tr>
            <tr><th>Change</th><td></td><td>{{ change }}%</td>
        </table>
    </div>`,
    data: {
        characterClass: <Constants.CharacterClass>"Archer",
        target: <Constants.Target>"Devorak",
        str: 59, strDiff: 0,
        dex: 508, dexDiff: 0,
        int: 25, intDiff: 0,
        luk: 27, lukDiff: 0,
        weaponAttack: 1956, weaponAttackDiff: 0,
        bonusAttack: 0, bonusAttackDiff: 0,
        pmAttack: 365, pmAttackDiff: 0,
        piercing: 19.5, piercingDiff: 0,
        pmPiercing: 10.4, pmPiercingDiff: 0,
        accuracy: 93, accuracyDiff: 0,
        critRate: 209, critRateDiff: 0,
        critDamage: 125, critDamageDiff: 0,
        damageBonus: 10.83, damageBonusDiff: 0
    },
    computed: {
        currentDamageFactor: function() {
            return this.damageFactor(this.weaponAttack, this.bonusAttack, this.pmAttack, this.damageBonus);
        },
        currentExpectedCritRate: function() {
            return this.expectedCritRate(this.critRate, this.luk);
        },
        currentCritFactor: function() {
            return this.critFactor(this.currentExpectedCritRate, this.critDamage);
        },
        currentAccuracyFactor: function() {
            return this.accuracyFactor();
        },
        currentDefenseFactor: function() {
            return this.defenseFactor(Constants.defense[this.target], this.piercing);
        },
        currentResistFactor: function() {
            return this.resistFactor(Constants.pmResistance[this.target], this.pmPiercing);
        },
        currentMitigationFactor: function() {
            return this.mitigationFactor(this.currentDefenseFactor, this.currentResistFactor);
        },
        currentExpectedDamage: function() {
            return this.expectedDamage(Constants.classDamageFactor[this.characterClass], this.currentDamageFactor, this.currentCritFactor, this.currentAccuracyFactor, this.currentMitigationFactor, 100);
        },
        compareDamageFactor: function() {
            return this.damageFactor(this.weaponAttack + this.weaponAttackDiff, this.bonusAttack + this.bonusAttackDiff, this.pmAttack + this.pmAttackDiff, this.damageBonus + this.damageBonusDiff);
        },
        compareExpectedCritRate: function() {
            return this.expectedCritRate(this.critRate + this.critRateDiff, this.luk + this.lukDiff);
        },
        compareCritFactor: function() {
            return this.critFactor(this.compareExpectedCritRate, this.critDamage + this.critDamageDiff);
        },
        compareAccuracyFactor: function() {
            return this.accuracyFactor();
        },
        compareDefenseFactor: function() {
            return this.defenseFactor(Constants.defense[this.target], this.piercing + this.piercingDiff);
        },
        compareResistFactor: function() {
            return this.resistFactor(Constants.pmResistance[this.target], this.pmPiercing + this.pmPiercingDiff);
        },
        compareMitigationFactor: function() {
            return this.mitigationFactor(this.compareDefenseFactor, this.compareResistFactor);
        },
        compareExpectedDamage: function() {
            return this.expectedDamage(Constants.classDamageFactor[this.characterClass], this.compareDamageFactor, this.compareCritFactor, this.compareAccuracyFactor, this.compareMitigationFactor, 100);
        },
        change: function() {
            return (this.compareExpectedDamage - this.currentExpectedDamage) / this.currentExpectedDamage * 100;
        }
    },
    methods: {
        damageFactor: function(weaponAttack: number, bonusAttack: number, pmAttack: number, damageBonus: number) {
            return (weaponAttack + bonusAttack) * pmAttack * (1 + damageBonus/100);
        },
        expectedCritRate(critRate: number, luk: number) {
            return critRate * Constants.critRateFactor[this.characterClass] + luk * Constants.lukFactor[this.characterClass];
        },
        critFactor(critRate: number, critDamage: number) {
            return 1 + critRate * (critDamage/100 - 1);
        },
        accuracyFactor() {
            return 1; // TODO
        },
        defenseFactor(defense: number, piercing: number) {
            return 1 / (defense * (1 - piercing/100));
        },
        resistFactor(pmResistance: number, pmPiercing: number) {
            return Math.min(1, (1500 * (1 + pmPiercing/100) - pmResistance) / 1500);
        },
        mitigationFactor(defense: number, resistance: number) {
            return defense * resistance;
        },
        expectedDamage(classFactor: number, damageFactor: number, critFactor: number, accuracyFactor: number, mitigationFactor: number, skillPercent: number) {
            return classFactor * damageFactor * critFactor * accuracyFactor * mitigationFactor * skillPercent/100;
        }
    }
});