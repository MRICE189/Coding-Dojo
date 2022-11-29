Attack slap = new Attack("Slap", 5);
Attack stab = new Attack("Stab", 20);
Attack punch = new Attack("Punch", 10);

Enemy goblin = new Enemy("Goblin");

goblin.Attacks.Add(slap);
goblin.Attacks.Add(stab);
goblin.Attacks.Add(punch);

goblin.RandomAttack();