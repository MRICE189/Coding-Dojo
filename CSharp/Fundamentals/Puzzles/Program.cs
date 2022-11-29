// Coin Flip

static string coinFlip()
{
    Random rand = new Random();
    int random = rand.Next(0,2);
    string result = "heads";
    if (random == 1)
    {
        result = "tails";
    }
    return result;
}

System.Console.WriteLine(coinFlip());
System.Console.WriteLine(coinFlip());
System.Console.WriteLine(coinFlip());

// Dice Roll

static int diceRoll(int sides = 6)
{
    Random rand = new Random();
    int diceRoll = rand.Next(1,sides+1);
    return diceRoll;
}

// System.Console.WriteLine(diceRoll(6));
// System.Console.WriteLine(diceRoll(6));
// System.Console.WriteLine(diceRoll(6));

// Stat Roll

static List<int> statRoll(int rolls = 1)
{
    List<int> allRolls = new List<int>();
    for (int i=0; i<rolls; i++)
    {
        allRolls.Add(diceRoll());
    }
    return allRolls;
}

// foreach (int roll in statRoll(4))
// {
//     System.Console.WriteLine(roll);
// }

// Roll Until...

static int rollUntil(int target)
{   
    // end the loop
    int result = 0;
    int count = 0;
    while (result != target)
    {
        result = diceRoll();
        count++;
    }
    return count;
}

System.Console.WriteLine(rollUntil(4));