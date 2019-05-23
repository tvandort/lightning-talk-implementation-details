---
transition: none
title: implementation details
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

- <span class="fragment">brittle tests</span>
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

both changes break tests

---

do both have the same coverage?

note:
use example 2 to manually set the state check the value <- look more tests

now we have the same coverage. but if we change button click to add 2 instead we
break the contract.

---

can we break the code...

but keep the tests working?

note: yes use example 1 flip flop add & sub maybe comment out rest

---

back to what

---

<q cite="https://kentcdodds.com/blog/testing-implementation-details">
Implementation details are things which users of your code will not typically
use, see, or even know about.
</q>

Kent C. Dodds

note: good kent c dodds blog post i found while writing thing.
link is in the slides

mention react testing library, not as easy to direct state test.
doesn't shallow render.

---
