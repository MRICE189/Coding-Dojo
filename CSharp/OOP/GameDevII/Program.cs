Melee meleeGuy = new Melee("Fighter");

meleeGuy.Attack();
meleeGuy.Rage();

Ranged rangeGuy = new Ranged("Ranger");

rangeGuy.Attack();
rangeGuy.Dash();
rangeGuy.Attack();

MagicCaster mageGuy = new MagicCaster("Mage");

mageGuy.Attack();
mageGuy.Heal(meleeGuy);