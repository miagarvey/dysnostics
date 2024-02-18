## Inspiration

We’ve seen a priority in the coding community of hacking for social good, and we ourselves are developers for social good. We wanted to create a tool that helps well intentioned developers preempt the consequences that may come from use in a morally complex world. As Stanford students, none of us want a repeat of Theranos. Even for tech companies that aren’t deliberately evil, the ubiquity and power of technology has a lot of potential to cause harm. While we can’t predict the future, we can engage with others’ imaginations of digital dystopias. From Brave New World to Black Mirror, countless creative minds have speculated, warned, and contemplated the dangerous potential of unchecked technological advancement. We believe that this kind of humanities based lens is often missing from the development process of tech companies… but who can blame them? Getting a computer science degree takes a lot of time, and building a startup takes even more. Where do you find time to critically engage with these forms of media? We designed Dysnostics so you don’t have to.

## What it does

Dysnostics is a simple, user-friendly web app to which you simply provide your company name, and it generates a full “dystopian diagnostic” report. The report includes evaluations of your company across six categories: surveillance & privacy, manipulation of information & behavior, inequality, dependence on technology/the product, polarization, and one company specific category, all of which are prevalent themes in dystopian fiction.

## How we built it

We created a custom dataset of ai-generated analysis of top companies and startups. Our first step was to manually engineer a prompt to open-ai which generated the most specific, productive feedback for a company. We then fine-tuned an LLM model on these open-ai interactions to make similar analyses of any user-provided company. We then integrated this into a user-friendly web app supported by Bun backend.

## Challenges we ran into

The generation of our custom dataset was projected to take 6 hours, but we overcame this challenge when we realized we could employ parallel computing to reduce that time by orders of magnitude. We were also first time web developers, and we decided ambitiously to build a web app, so we had to overcome a steep learning curve in a short period of time. For the first 24 hours of the hackathon, we relied on Convex for the backend of our web app. However, it turned out that Convex did not support integrated API retrieval with Monster API. So, we pivoted with only 12 hours left and leveraged Bun for the backend. 

## Accomplishments that we're proud of

We are proud of our API that we’ve created using our fine-tuned LLM model. We worked closely with Monster API to create a functional endpoint, as we got complicated errors that representatives of the Monster API team themselves had to investigate. 

## What we learned

We learned so much about working on a product from start to finish, from ideation to launch. We learned about task delegation, integrating individually functioning components into a complete product, and resilience and flexibility.

## What's next for Dysnostics

Free from the time constraints of Treehacks, we would implement a scoring function for our evaluation of the companies on each of the categories. This would provide users with a quantitative metric to compare companies on, which would allow us to provide a more comprehensive landscape of the severity of the potential consequences of different companies. 
