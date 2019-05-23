---
transition: none
---

---

implementation details

note: wanted to talk about implementation details
something ive done, something ive seen at client sites, & seen other peers do
so
going to ask everyone here ->

---

please don't test them

note: you might ask -> why or what i mean by this

---

you might ask:

<div class="fragment">what</div>
<div class="fragment">why</div>

note:
what do i mean by this
or
why do i say this
lets address those
first -> what

---

what

note:
well... its ->

---

a little hard to define

note: we'll get back to that.
how about why though

---

why don't we want to test implementation details?

---

- brittle tests
- <span class="fragment">misleading tests</span>
- <span class="fragment">more tests than needed</span>

---

=>

note: time for example
write 3 test examples

1 get instance call add check state
2 find button click add check state
3 find button click check rendered content

---

cool working tests!

what would happen if we...

note:
change count to clicks
change add to handleAdd

---

change count to clicks
change add to handleAdd

both changes break tests

also note we didn't check the output

use example 2 to manually set the state check the value <- look more tests

now we have the same coverage. but if we change button click to add 2 instead we
break the contract.

---

<q cite="https://kentcdodds.com/blog/testing-implementation-details">
Implementation details are things which users of your code will not typically
use, see, or even know about.
</q>

Kent C. Dodds

---
