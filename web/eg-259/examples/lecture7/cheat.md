# Cheat Sheet for Regular Expression Session #

Many programming languages have a regular expressions library or regular expression literals built-in. What you learn here will be useful later when we look at PHP. But it is useful also for Java, Python, Perl, Ruby, MySQL, Apache and even Unix (e.g. in editors emacs and vim, and the text processing tools grep, awk, egrep, and even to a limited extent, the shell). Some of the most powerful programmer's editors, such as Sublime Text and TextMate, also have excellent support for regular expressions.

You should read this document in conjunction with the notes on [Regular Expressions](http://www.cpjobling.me/dokuwiki/eg-259:lecture7). Copy the text examples and regular expressions into am regular expression tool such as [RegexPal](http://regexpal.com).



## Notes

* The examples given covers many more features of regular expressions than will be possible to cover in one session. However, all the material is examinable.
* In JavaScript a regular expression is entered between "slashes" `/../`. In these examples, which are intended to be copied and pasted into RegexPal, the slashes are omitted. It is however important to note that for the first example, the equivalent JavaScript would be
```javascript
var matches = "cat".match(/cat/); // returns ["cat"]
"Cat".matches(/cat/); // returns []
```
* The modifiers that follow the regular expressions in JavaScript `/../i`, `/../g`, `/../m`  and `/../s` are "switched on" using checkboxes in RegexPal and similar regular expression evaluation tools. In JavaScript these modifiers can be combined as in `/../ig`. 

## The Examples

### Characters ###

Match themselves. Character matches are normally case sensitive.

    /cat/

matches *cat* but not *Cat*.

#### Modifier for case insentive match

The regular expression

    /cat/i

matches *cat* and *Cat*

    /Cat/

matches *Cat* but not *cat*.

    /Cat/i

is the same as

    /cat/i

#### Modifier for global match

The regular expression

    /zz/g

will match both occurrences of *zz* in the word *pizzazz*. Whereas

    /zz/

will only match the first *zz*.

*Try it Yourself*

Try matching `/cat/` against `the cow, the camel and the cat communicated` with and without setting the global flag.

### Metacharacters ###

Certain chanracters, called *Metacharacters*, are special in regular expressions. The full list is

    \ | ( ) [ ] { } ^ $ * + ? .

#### Dot ####

The meta character `.` matches any character except the new-line.

*Try matching*

    /h.t/

against

    hat hot hit heat h_t h t hzt h#t h.t h
    t

Turn on `s` flag (`/h.t/s`) to match newline as well.

Warning

    /9.00/

doesn't work the way you might expect it to. It *will* match

    9.00

but it will also match each of these:

    9.00 9500 9-00 9 00

Try

    .a.a.a

with

    banana papaya #a$a& abacab

**Example**

Find a regular expression that will match each of:

    silver  shiver  slider

#### Special characters ####

Mostly punctuation and terminal control codes.

* Spaces (` `)
* Tabs (`\t`)
* Line returns (`\r` `\n` `\r\n`)
* None printable bell (`\b`); escape (`\e`); formfeed (`\f`); vertical tab (`\v`)
* ASCII or ANSI control characters: `0xA9` (Hexadecimal A9) is written `\xA9` as a regular expression.

#### Character Sets ####

Delimited by `[ ]`. Matches **only one** of *any* of the characters listed.

Try

    [aeiou]

with

   Bananas Peaches Apples

and

    gr[ae]y

against

    grey gray great

Only one character is matched. To match *great* we would need

    gr[ea][ea]t

but this would also match

    great graet graat and greet

In this case, the literal `/great/` is actually the most accurate matcher!

Try

    [ABCDEFGHIJKLMNOPQRSTUVWXYZ]ello

to match

    Hello

#### Ranges

    [A-Z]ello
    [A-Za-z]
    [0-9]

*Examples*

Match US phone number

    123-555-7897

Match US zip code:

    90210

UK Post code:

    WC12 9RX

#### Negation ####

Matches any character *not* in character class.

Example

    The quick brown fox jumped over the lazy dog.

Use Regex

    [^a]

and add to it. Replace `/^abcdefghijklmnopqrstuvwxyz/` with `/^a-z/`, then add `A-Z .`. Watch how we eliminate the matchable values as we tell the expression matcher what is not in the matchable set.

Use

   [^aeieu]

with

   It seems I see the sea.

and explain the result. Repeat with

    see[^mn]

Note in particular that only one character is matched. Toggle global to see this more clearly.

#### Metacharacters inside Character Sets ####

    h[abc.xyz]t

    Matches hat and h.t but not hot

Here dot `.` matches period. It is not a metacharacter inside the character set.

More examples

    var(3)  var[4]

Try

    var[[[(][0-9][)\]]

Another example

    file01 file-1 file\1 file_1

is matched by

    file[0\-\\_]1

Note what has to be escaped to make these work are the meta characters that are special to character sets and the backslash.

#### Short-hand character sets ####

    \d\d\d\d

match against

    1984  text 1_5W

Try

    \w\w\w\w

Try

    blue-green paint

with

    [\w\-]

Try

    123 456 789  abc

with

    [\d\s]
    [^\d\s]
    [\D\S]

### Repetition ###

Try

    apples*

matches

    apple apples applessss
   
Try

    apples+

which matches *apples* and *applessss* but not *apple*

Try

    apples?

which matches *apple* and *apples* but only first part of *apples*sss

Try
    \d\d\d\d*

against

    123456789 1234 123 12

Now, compare with

    \d\d\d\d+

and

    \d\d\d+

Try

    [a-z]+\d[a-z]*

Against

    abcd9wzyz

And try to work out difference between `*` and `+`.

**Example**

Match both *colour* and *color*

**Example**

Match plural word. E.g. *apples* in "We picked apples".

Use matcher

    \w+s

Picks plurals, ... but would also select *applessssss*. Need upper limit!

### Quantified Repetition ###

*Words of varying length*:

    Shall I compare thee to a summer's day?
    Thou art more lovely and more temperate:
    Rough winds do shake the darling buds of May,
    And summer's lease hath all too short a date.

Regexes:

    \w+\s
    \w{5}\s
    \w{2,5}\s
    \w{3,5}\s
    \w{5,}\s
    \w{3,}\s

*Phone number*:

    555-867-5309

Regex:

    \d{3}-\d{3}-\d{4}
    
*Bonds*:

    A bonds; AA bonds; AAA bonds

which is matched when regex is `/A{1,2} bonds/`?

*File names*:

    report_1997-04
    budget_03-04
    memo_712539-100
    
Regexp:

    \w+_\d{2,4}-\d{2}

Compare with too permissive:

    \w+_\d+-\d+

### Greedy Expressions ###

Quantified regex will try to match the longest possible match.

Example 1

    01_FY_07_report_99.xls
    /\d+\w+\d+/

Example 2

    "Milton", "Waddams" "Initech, Inc."
    /".+", ".+"/

### Lazy Expressions ###

Stop earlier

Example 1

    01_FY_07_report_99.xls
    /\d+\w+?\d+/

Example 2

    "Milton", "Waddams" "Initech, Inc."
    /".+?", ".+?"/



### Grouping Metacharacters ###

#### Grouping #### 

Use of parentheses `( )`:
- allows repetition to a group 
- makes expressions easier to read 
- captures group for use in matching and replacing 
- cannot be used inside a character set

Examples

- Regex `/(abc)+/` matches "abc" and "abcabcabc".  
- Regex `/(in)?dependent/` matches "independent" and "dependent"
- Regex `/run(s)?/` is the same as `/runs?/`.
    
*Example*    

Text:

    A2B2C3D4E5F6G7H8I9I0

Regex:

    (+[A-Z][0-9]){3}
    
Text:

    independent or dependent

Regex:

    (in)?dependent
    
Text:

    I run fast, he runs faster
    
Regex:

    runs?
    run(s)?
    
#### Alternation ####

"Or" (`|`): match previous or next expression.

*Examples*

Text:

    apple orange appleorange apple|orange

Regex:

    apple|orange

Text:

    abcdefghijklmnopqrstuvwxyz

Regex:

    abc|def|ghi|jkl

Text:

    applejuice applesauce

Regex:

     applejuice|sauce
     apple(juice|sauce)

Text:

     weird or wierd

Regex:

     w(ie|ei)rd

#### Repeating and Nesting Alternations ####

###### Repetition

Regex:  `/(\d\d|[A-Z][A-Z]){3}/`
String: `"112233 AABBCC AA66ZZ 11AA44"`


###### Nesting

Regex:  `/(apple (juice|sauce)|milk(shake)?|sweet (peas|corn|potatoes))/`

String:

    milk
    apple juice
    sweet peas
    yogurt
    sweet corn
    apple sauce
    milkshake
    sweet potatoes


Regex:  `/(apple juice|apple sauce|milk|milk shake|sweet peas|sweet corn|sweet potatoes)/`

Regex:  `/[\w ]+/`

## Anchors ##


Metacharacter `^` anchors match to beginning of string/line. `$` anchors match to end of string/line.

*Examples*

String:

    Mr. Smith went to Washington.

Regex:  

    [A-Z]
    ^[A-Z]
    \.
    \.$
    ^[A-Z][A-Za-z.\- ]+\.$

*Examples*

Email Regex:  

    ^\w+@\w+\.[a-z]{3}$

Text:

     nobody@nowhere.com
     nobody@nowhere.com, somebody@somewhere.com


*Find whitespace*

Regex:  

    ^[ \t]+
    [ \t]+$

Text:

        It was a dark and stormy night.
    And they lived happily ever after.      

### Multiline Anchors ###


Regex:

    ^[a-z]+$

Text (new line after sweet potatoes):

    milk
    apple juice
    sweet peas
    yogurt
    sweet corn
    apple sauce
    milkshake
    sweet potatoes
    
Regex `/^[a-z]+$/m` for multiline mode in JavaScript.


### Word boundaries ###

Use `\b` and `\B` for word boundary and not word boundary. A position not a character.

Text:

    Shall I compare thee to a summer's day?
    Thou art more lovely and more temperate:
    Rough winds do shake the darling buds of May,
    And summer's lease hath all too short a date.
    
Example regexes:

    \b\w+\b
    \b[\w']+\b
    \b[\w']+?\b

Faster matches using word boundaries:

String:

    We picked apples.

Regexes:  

    \w+s
    \b\w+s\b

## Capturing Groups and Back-references ##

Regular expression remembers anything that matches within of parenthesis group. We can refer to these matches as *back-references* (`\1`, `\2`, ..., `\9`) and we can reuse them within a regular expression. They will also be returned to us from matching functions as well.

They also allow us to do things like search and replace.

### Groups ###

*Matching something already matched*

Regex:  

    (apples) to \1

Text:

    apples to apples

*A string that repeats itself*

Regex:  

    (ab)(cd)(ef)\3\2\1
Text: 

    abcdefefcdab


Regex:

    (ab)(cd)(ef)(gh)(ij)\3\2\1\4\5

String: 

    abcdefghijefcdabghij

*HTML emphasis tags*

Regex:  

    <(i|em)>.+?</\1>

String:

    <i>italics</i> <em>emphasis</em> <i>bad</em> <em>bad</i>

*HTML emphasis tags (extended)*

Regex:  

    <(i|em|b|strong)>.+</\1>

String:

     <i>italics</i> <em>emphasis</em> <b>bold</b> <strong>strong</strong>

*People who's last name starts with their first name*

Regex:

    \b([A-Z][a-z]+)\b\s\b\1son\b

String:

    Steve Smith, John Johnson, Eric Erikson, Evan Evanson

*Repeated words*

Regex:

    \b(\w+)\s+\1\b/

String: 

    Paris in the 
    the spring.


