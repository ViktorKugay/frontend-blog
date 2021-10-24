---
id: f708aba5-19db-431d-a1f0-7eda252559ae
slug: strategic_domain_driven_design_and_enterprise_architecture
title: Strategic domain driven design and enterprise architecture
date: '2021-10-18T00:00:00.000Z'
image: https://cdn-images-1.medium.com/max/12032/1*EPDvGc1KLBVxgWAdYaTLkA.jpeg
description: This is not a technology or a methodology. It is a way of thinking.
---

## Introduction

Domain-Driven (DDD) design is not a technology or a methodology. It is a way of thinking and a set of priorities which help us to speed up software projects that have to deal with complicated domains. The DDD patterns such as Entity, Value Object, Aggregate and Repository have been used in software engineering to model complex business domains since Domain-driven Design has been introduced by Eric Evans in 2003¹. Generally, DDD can be divided into three areas. First one is basic building blocks. It describes how to isolate the domain from technology by use of a layered architecture and combined with practical object-oriented design patterns. The next one is sophisticated models. This block aligns software with domain expert thinking, domain concepts are made explicit in code and refactoring of the code is driven by domain insight. The final is strategic design — addresses model consistency and management of complexity in larger systems.
Strategic Domain-driven Design can be used to decompose the problem domain of a software system into multiple sub-domains and the so-called Bounded Contexts. It also allows architects to define the relationships between Bounded Contexts, e.g., how they work together. Strategic design provides three main building blocks: Context mapping, Distillation, Large scale structure. During last few years strategic DDD was significantly gained especially in the context microservices and enterprise application integration.

## Problems and solutions

The decomposition of a monolithic application into multiple services is challenging. High cohesion within the services and loose coupling between them are one of the most preferable and crucial purposes to keep the application scalable and maintainable. Decomposing software systems into smaller, more maintainable and reliable units has been open research question for many years. Many scientists and developers already wrote about it. For instance, David Parnas wrote about decomposing systems into modules in 1972². Nevertheless, the strategic patterns have some ambiguity and different interpretations of how they should be used. It is not understood well yet how service interfaces can be decomposed and which practices and patterns are the most suitable and effective to design and analyze service-oriented systems. DDD can help us in answering many questions such as
>  which criteria are relevant to find adequate services boundaries and which patterns and practices can be applied to identify candidate services³?

Developers who use microservices pattern suggest to leverage DDD patterns to answer the above design questions. DDD provide mechanisms to model software-intensive systems in terms of Bounded Contexts, and then implement one microservice for each Bounded Context. Microservices architecture has a lot of benefits but this is not a silver bullet and this approach also has disadvantages when essential benefits of this architecture became burdens: velocity plummeted, defect rate exploded⁴. Identification of suited Bounded Contexts is also challenging. Context Map can help us design models and diagrams. Context mapping as a practice and the strategic DDD patterns to define the relationships between Bounded Contexts also help us to be sure that Bounded Contexts are valid. Clear understanding of how these patterns shall work together is often missing. This is obvious that different stakeholders have different opinions on how these patterns should be applied and combined. To solve the issue software engineers can use Context Map to analyze and understand a domain.

![[https://www.researchgate.net/publication/221321893_Architectural_improvement_by_use_of_strategic_level_domain-driven_design](https://www.researchgate.net/publication/221321893_Architectural_improvement_by_use_of_strategic_level_domain-driven_design)](https://cdn-images-1.medium.com/max/2500/1*FIy-4YfIkJjs8oXLhMwO7w.png)

## Example

In my team which develops different marketing projects with short lifetime within large bank ecosystem this is a crucial advantage of the Context Map and Bounded Contexts. Working with a lot of project and bank teams requires to design software with multiple dependencies. Practically, Context Map helps us to design communication between many bank domains i.e., services. Short timing doesn’t allow us to create multiple versions of the software and short project life doesn’t allow us to have multiple testing iterations during alpha or beta tests. Developers should spend as little time as possible to communicate with business, specify all requirements, design system, find and handle all corner cases or bottlenecks and retry design process if needed. Such circumstances require creating reach and clear diagrams which describes whole project architecture in order to many other teams which involved to the project know their responsibilities. Fortunately, DDD offers several relationship patterns allowing modelers to describe how two Bounded Contexts and the corresponding development teams work together. The Partnership relationship describes an intimate mutual relationship between two Bounded Contexts, since the resulting product of the two can only fail or succeed as a whole. A Shared Kernel relationship indicates that two contexts are very closely related and the two domain models overlap at many places. In my case bank infrastructure provide several core features which standardized and have shared library⁵.

The experience from our use of strategic level Domain-Driven design is that context maps and the activity of context mapping can improve the quality of the Enterprise Architecture and its derived software architectures as well. Another finding is that being able to identify the projects core domain is important with respect to how to utilize development resources, and how developers choose to think about the software under development. The encountered challenge is for the business to agree on what is most important, where one of the discoveries is that in large scale systems there will be multiple cores. Next finding was that the combination of context maps and responsibility layers reduces the perceived complexity. In summary strategic level Domain-Driven design can be used to enhance Enterprise Architectures and the derived software architectures.

In larger projects enterprise architecture identifies the main components of the organization, its information systems and the ways in which these components work together in order to achieve defined business objectives. The components include staff, business processes, technology, information, financial and other resources required by the business to achieve its objectives enterprise architecture is based on a holistic view rather than an application-by-application view.

## Conclusion

DDD patterns can significantly accelerate developing process. Problems and solutions space aligned in a common language and an architecture that can incrementally accommodate change in order to move fast is the key to successful growth. That’s where strategic patterns play a role. 
Of course, DDD cannot solve all issues depend on software development but in particular cases Bounded contexts and Context Map also another DDD patterns can dramatically improve communication and responsibilities between developers and managers.

### Reference

[1]: Evans, E. (2003). Domain-Driven Design: Tackling Complexity in the Heart of Software. Addison-Wesley

[2]: Parnas, D. L. (1972). On the criteria to be used in decomposing systems into modules. Commun. ACM, 15(12):1053–1058

[3]: Pautasso, C., Zimmermann, O., Amundsen, M., Lewis, J., and Josuttis, N. (2017). Microservices in practice, part 1: Reality check and service design. IEEE Software, 34(1):91–98

[4]: Experience from Failing with Microservices: [https://segment.com/blog/goodbye-microservices](https://segment.com/blog/goodbye-microservices)

[5]: Как мы в Tinkoff принимаем архитектурные решения: [https://www.youtube.com/watch?v=-KMWmXTr2LE](https://www.youtube.com/watch?v=-KMWmXTr2LE|)

[6]: Architectural improvement by use of strategic level domain-driven design [https://www.researchgate.net/publication/221321893_Architectural_improvement_by_use_of_strategic_level_domain-driven_design](https://www.researchgate.net/publication/221321893_Architectural_improvement_by_use_of_strategic_level_domain-driven_design)

[7]: Domain-specific Language and Tools for Strategic Domain-driven Design, Context Mapping and Bounded Context Modeling: [https://www.scitepress.org/Papers/2020/89105/89105.pdf](https://www.scitepress.org/Papers/2020/89105/89105.pdf)
