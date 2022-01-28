Please save each solution in its own file, in a practice problems folder.

Wordplay

A file containing all valid Scrabble words, one word per line:

https://www.dropbox.com/s/qkg62nkh483g635/sowpods.txt?dl=0


For loops and if conditions

[ ] What are all of the words containing UU?
[ ] What are all of the words containing an X and a Y and a Z?
[ ] What are all of the words containing a Q but not a U?
[ ] What are all of the words that contain the word CAT and are exactly 5 letters long?
[ ] What are all of the words that have no E or A and are at least 15 letters long?
[ ] What are all of the words that have a B and an X and are less than 5 letters long?
[ ] What are all of the words that start and end with a Y?
[ ] What are all of the words with no vowel and not even a Y?
[ ] What are all of the words that have all 5 vowels, in any order?
[ ] What are all of the words that have all 5 vowels, in alphabetical order?

Setting up storage to use during a for loop, including counters and arrays

[ ] How many words contain the substring "TYPE”?
[ ] Create and print an array containing all of the words that end in "GHTLY"
[ ] What is the shortest word that contains all 5 vowels?
[ ] What is the longest word that contains no vowels?
[ ] Which of the letters Q, X, and Z is the least common?
[ ] What is the longest palindrome?
[ ] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?


Countries

A file containing all of the countries in the United Nations, one country per line:

https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0


https://www.dropbox.com/s/k6xcq55tqanbdmz/countries.txt?dl=0

For loops and if conditions

[ ] What are all of the countries that have “United” in the name?
[ ] What countries both begin and end with a vowel?
[ ] What country names are > 50% vowels?

Setting up storage to use during a for loop, including counters and arrays

[ ] What is the shortest country name? Make sure your solution can handle ties.
[ ] What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
[ ] There is at least one country name that contains another country name. Find all of these cases.


Baby names

A file containing the top 40 baby names for boys in 2020:

https://www.dropbox.com/s/drpcy1yrsq4uadk/baby_names_2020_short.txt?dl=0


A file containing the top 40 baby names for boys in 1880:

https://www.dropbox.com/s/fvdi7jl280lqp8c/baby_names_1880_short.txt?dl=0


More for loops, if conditions, and storage

[ ] What is the shortest baby name in the top 40 baby names for 2020?
[ ] What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

Nested for loops

[ ] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
[ ] What are all of the names that were top 40 baby names in both 1880 and 2020?


NBA Finals

A CSV containing NBA finals data for every year:

https://www.dropbox.com/s/8dx99bjfwh9eh38/nba_finals.csv?dl=0


https://www.dropbox.com/s/8dx99bjfwh9eh38/nba_finals.csv?dl=0

Dictionaries

Read the NBA finals CSV data into one more more dictionaries as needed to complete the following:


[ ] Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
[ ] Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
[ ] Write a function that takes as an argument a team name and returns the first year the team won the NBA finals.
[ ] Which teams have made it to the NBA finals but have never won?
[ ] Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: <etc>


Interview question: word solver

This is a real 60-minute interview question at a tech company.

Part 1

Write some code that:

- Takes a 7-character string (either as a command-line argument or as an argument to a function)
- Prints out the words that can be made from those characters, along with their Scrabble scores, one word per line, in descending score order

Example input and output:

`$ python scrabble_cheater.py SPCQEIU  # Use any language you like.`
`17 piques`
`17 equips`
`16 quips`
`16 pique`
`16 equip`
`15 quip`
`…`

Resources:

- Word list
- Letter scores
Part 2

Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.

Wildcards do not count towards a word's score.

Billboard Hot 100 of 2000

A CSV containing the Billboard Hot 100 data for every week of 2000:

https://www.dropbox.com/s/v56vasmua65qjgy/billboard100_2000.csv?dl=0


https://www.dropbox.com/s/v56vasmua65qjgy/billboard100_2000.csv?dl=0


[ ] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
    These were the number one songs of 2000:
    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child

…

[ ] What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?
[ ] What artist had the most songs chart in 2000, and what were those songs?
[ ] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?