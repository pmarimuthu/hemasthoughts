---
sidebar: auto
author: Hema Thiruchelvam

prev: ../succeed-with-digital-marketing/
next: ../starting-a-healthy-lifestyle/

meta:
  - name: titile
    content: Deep Marketing Automation using tools
  - name: description
    content: Deep Marketing Automation using ConvertKit, Typeform and Zapier - Sending personalized email based on customer's inputs.
  - name: keywords
    content: Digtial Deep Marketing, Typeform ConvertKit Zapier, Personalized emails from single email
---

## Deep Marketing Automation using ConvertKit, Typeform and Zapier <Badge text="digital" type="error" />

In this article, you are going to see about the fundamentals deep marketing. 
A practical example on Deep Marketing Automation using ConvertKit, Typeform and Zapier - Sending personalized email based on Customer's answer to a survey.

### What is Deep Marketing

Meeting the customer face-to-face; understanding customer's pulse by asking set of relevant questions; pick a best suitable product; and explain how the product will work for him/her.

### The Scenario

Let's say you are conducting an online survey to understand customer pulse on Healthy Lifestyle.

::: tip
Sample: [Survey Form](https://nq6ppt5nyl9.typeform.com/to/sBXFTynZ)
:::

The survey form contains the below 5 questions with mulitiple choice answers:

#### Q1. Do you check your phone upon wake up?
>  - Yes
>  - No

---

#### Q2. How many hours do you workout in a week ?
> - [1-2 hrs] 
> - [2-3 hrs]
> - [3-4 hrs]
> - [4-5 hrs]
> - Others
---

#### Q3. Do you have a balanced diet ?
>  - Yes
>  - No
---

#### Q4: What is the difficulty in following a healthy lifestyle? Healthy lifestyle is having balanced diet, exercise daily, good sleep?
> - I don't have time
> - Lack of motivation
> - I really love food
> - I have trouble avoiding unhealthy snacks
> - I travel a lot
> - I work long hoursI want to start being healthy but don't know where to start
---

Once you collected the answers, you have to categorize customers based on the answers to the 5 questions.

Then, you have to send email to each customer with personalized content.

```
From the above survey, you will be able to get { 2 X 5 X 2 X 6 = 120 } possible answer sets.
Which means, answers from 120 unique customers.
```

Now, you have got an opportunity to approach 120 group of people.
That means you can perpare 120 personalized email content.

Send the personalized email !!

::: tip
Your customer feels that you are talking to him/her 1 to 1.
:::

This is a technique of Deep Marketing.

---

## How to automate Deep marketing using tools?  <Badge text="digital ++" />
**Tools - Typeform, ConvertKit and Zapier**

### Steps to automate this technique:

### Step 1: Create Typeform 
Create the Online survey form using Typeform
[Example](https://nq6ppt5nyl9.typeform.com/to/sBXFTynZ)

### Step 2: Create ConvertKit Landing Page Form
- Signup to create ConvertKit account.
- Create a Landing Page & Form ( Home > Landing Page & Form > Create New)
  - Choose a template (e.g., Abbey)
  - [Step-A] Customize if you want; Save & Publish
  - Note the URL of the landing page
- Share with your customers.

### Step 3: Subscribers list in ConvertKit
Once your customers started submiting the form:
- Check your subscribers 
- ( Home > Landing Page & Form > {SELECT-YOUR-LANDING-PAGE} > Subscribers
- You can add customers manually as well for testing purpose
- Click on a customer
  - You will find only the fiels you added in [step-A]
  - You have to add more fields - to map with Typeform fields. [Step-B]
- Save & publish.

### Step 4: Zapier - Connecting Apps
Zapier (connecting apps - To Connect Typeform & ConvertKit)
- Signup to create account
- Create a new Zap
- Select 1st app (Typeform) 
  - Choose app & event (Typeform & New Entry)
  - Choose account (your typeform account)
  - Setup trigger (your typeform)
  - Test trigger (you could see the subscriber details that you added manually)

  - Note:
    - Allow Zapier to access your Typeform account
    - Choose which form you want Zapier to access
    - Choose a triggering event (New Entry) => Each typeform submission is a new entry.

- Select 2nd app (ConvertKit)
  - Choose app & event (ConvertKit & Add Subscriber to Form)
  - Choose account (your ConvertKit account)
  - Setup action 
    - (Form: your ConvertKit landing page)
    - (Email: select mapping field for Email from the subscriber detailed pulled by Zapier)
    - Map other fields (fields that you added in [Step-B])

  - Note:
    - Allow Zapier to access your ConvertKit account
    - Choose the landing page & form for Zapier's access
    - Choose a trigger event (Subscribe to Form) => Map typeform & ConvertKit form fields.
    - 
- Turn ON the Zap.
- Share (Make a note of the share link for this Zap)

You are alomst done!

### Step 5: Setup New Broadcast message in ConvertKit
Create New Broadcast message in ConvertKit
  - Back to ConvertKit home page
  - Click on BROADCASTS from the Top Nav bar.
  - Click on New Broadcast button
    - Who will this broadcast be from? (You should see your email id)
    - Who will receive this broadcast? (Select All Subscribers)
    - Note:
      - You can also choose subscribers conditionally.
    - Broadcast description ( a short description about the email you broadcast)
  - click Next Step
    - Email Subject ( subject of the email)
    - Write your email content ...
      - body of the email goes here ... 
      - you can use scripts for dynamic value (refer below example email-body)

Example email content;
```
Hello 
 {% if subscriber.first_name != blank %} {{ subscriber.first_name}}, {% else %} there, {% endif %}

Thank you for subscribing to Hema'sThoughts Newsletter!!

For the age group {{ subscriber.age_group }}

{% if subscriber.age_group contains "20 to 30" %}
  Good news – in its third decade you body is primed for power sports and large muscle growth. Give yourself a pat on your potentially rippling back.
  So swerve the cross trainer and head straight to the weights room to take advantage of a body primed for visible abs.

{% elsif subscriber.age_group contains "31 to 40" %}
  You're in good company. In a study published in the American Journal of Clinical Nutrition, scientists found that men who managed to maintain their weight for 40 years still gained 3 pounds of fat each decade – while losing 3 pounds of muscle. In other words, father time's besting your body in the muscle and fat negotiations.

{% elsif subscriber.age_group contains "41 to 50" %}
  You're on the wane after 40, right? Ask 43-year-old Valmir Nunes, who completed the fastest ever time of the Badwater ultra-marathon – a 135-mile course in 50 degree heat across Death Valley. As he knows, greying hair comes with a side order of stamina
{% elsif subscriber.age_group contains "51+" %}
  According to figures from 77 Nuffield Health gyms, sixty-somethings typically work out seven or eight times a month, making them the most regular gym users in the country.
{% endif %}

{% if subscriber.difficulty "I want to start being healthy but don't know where to start" %}
  Since you don't know where to start; we suggest you to read our article which will guide you to start your journey.  
  https://hemasthoughts.com/stories/starting-a-healthy-lifestyle/#starting-a-healthy-lifestyle

{% elsif subscriber.difficulty "Lack of motivation" %}
  Don't worry, we are here to motiviate you, please read the below article to know the power of weight loss.  
  https://hemasthoughts.com/stories/fundamentals-of-weight-loss/
  
  Please contact us for further assistance.
{% endif %}

For more articles on Healthy Lifestyle; please read our other articles:
https://hemasthoughts.com

Regards,
Team Hema'sThoughts
```

### Reference

* [Conditional Email Content based on Tags](https://help.convertkit.com/en/articles/2502501-conditional-email-content-based-on-tags)
  
* [Deep Marketing Automation using ConvertKit, Typeform and Zapier](https://marimuthup.medium.com/deep-marketing-automation-using-convertkit-typeform-and-zapier-ce3c35da0b86)
  