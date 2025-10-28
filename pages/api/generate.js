const scriptTemplates = {
  energetic: (topic) => `
🎬 OPENING HOOK (0:00-0:15)
"Wait, WHAT?! You're NOT going to believe what I just discovered about ${topic}! Seriously, this is INSANE and it's going to blow your mind in the next 5 minutes!"

⚡ PATTERN INTERRUPT (0:15-0:30)
"Before we dive in, let me ask you this... Have you ever wondered why most people completely miss THIS? Yeah, I thought so. Well, buckle up because we're about to change that RIGHT NOW!"

🔥 VALUE BOMB #1 (0:30-1:30)
"Okay, so here's the deal with ${topic}... Most people think it's just [common misconception], but here's what they DON'T tell you... [Drop first major insight]. I know, RIGHT?! When I first learned this, my jaw literally dropped. This is the kind of stuff that separates the average from the EXTRAORDINARY!"

💥 ENGAGEMENT MOMENT (1:30-1:45)
"Now, drop a fire emoji in the comments if this is making sense so far! And stick around because what I'm about to share next is even CRAZIER..."

🚀 VALUE BOMB #2 (1:45-2:45)
"So here's where it gets REALLY interesting about ${topic}... [Share compelling story or example]. Can you imagine? This completely changed everything! And the best part? You can use this IMMEDIATELY!"

💡 PRACTICAL APPLICATION (2:45-3:30)
"Now let me show you EXACTLY how to apply this... Step ONE: [actionable tip]. Step TWO: [practical advice]. Step THREE: [game-changing insight]. It's literally THAT simple, but nobody talks about it like this!"

🎯 VALUE BOMB #3 (3:30-4:15)
"But wait, there's MORE! The secret sauce that makes ${topic} absolutely UNSTOPPABLE is this... [Final major revelation]. When you combine everything we just talked about, you create this powerful effect that just... WOW!"

⚡ SOCIAL PROOF (4:15-4:30)
"Don't just take my word for it - thousands of people are already using this and seeing INCREDIBLE results! The momentum is building and you do NOT want to miss out on this!"

🎬 POWERFUL CLOSE (4:30-5:00)
"So there you have it! FIVE MINUTES that could literally change everything you thought you knew about ${topic}. Now here's what I need you to do... SMASH that like button if this added value to your day, subscribe for more mind-blowing content like this, and drop a comment telling me what YOU'RE going to do with this information! Trust me, your future self will THANK YOU. See you in the next one - stay UNSTOPPABLE!"

🎵 [End with upbeat music and engaging end screen]
`.trim(),

  mysterious: (topic) => `
🎬 MYSTERIOUS OPENING (0:00-0:15)
"There's something about ${topic} that nobody wants you to know... Something hidden in plain sight that once you see it, you can't unsee it. What I'm about to reveal will change everything..."

🌙 BUILD CURIOSITY (0:15-0:45)
"For years, people have been searching for answers... But what if I told you the truth was right there all along? What if everything you believed about ${topic} was just... a distraction from something much deeper?"

🔮 REVELATION #1 (0:45-1:45)
"Let me take you back to when I first stumbled upon this... [Share mysterious discovery]. At first, I didn't understand what I was seeing. But then, piece by piece, the pattern emerged. And that's when I realized... ${topic} isn't what we've been told."

⚡ INTRIGUE MOMENT (1:45-2:00)
"Stay with me here... because what comes next gets even stranger... Comment 'I'm ready' if you want the full truth..."

🕵️ REVELATION #2 (2:00-3:00)
"Here's where things get interesting... [Share compelling evidence or story]. Notice anything unusual? Most people miss this completely. But once you know what to look for, you'll see it everywhere. This is the hidden layer of ${topic} that changes everything."

🔑 THE KEY INSIGHT (3:00-4:00)
"So what does this all mean? [Connect the dots]. You see, ${topic} operates on a level most people never explore. The surface is just the beginning. Underneath lies something far more powerful, far more profound..."

💫 PRACTICAL WISDOM (4:00-4:30)
"Now that you know this truth about ${topic}, here's how you use it... [Share actionable mysterious insight]. This knowledge is power, but only if you apply it. The question is... will you?"

🌟 MYSTICAL CLOSE (4:30-5:00)
"And there it is... The hidden truth about ${topic} revealed in just five minutes. But this is only the beginning of your journey. If you're ready to go deeper, if you're ready to see what others miss, then subscribe and join those who seek the truth beyond the surface. The mystery continues... Are you coming?"

🎵 [Fade out with atmospheric music]
`.trim(),

  storytelling: (topic) => `
🎬 STORY HOOK (0:00-0:20)
"Three months ago, my life changed forever because of ${topic}... And I almost missed it. Let me tell you a story that might just change your life too..."

📖 SETUP THE SCENE (0:20-1:00)
"Picture this... [Paint vivid scene]. I was just like you, scrolling through life, thinking I had it all figured out. But then something happened that made me question everything I thought I knew about ${topic}..."

💔 THE PROBLEM (1:00-2:00)
"You see, I was struggling with [relatable challenge]. Every day felt the same. I tried everything - [list attempts] - but nothing worked. I was frustrated, exhausted, and ready to give up. Have you ever felt that way? That moment when you think maybe it's just not meant for you?"

✨ THE TURNING POINT (2:00-3:00)
"But then... something shifted. I discovered the truth about ${topic}, and it wasn't what I expected. [Share transformation moment]. It was simple, yet profound. In that moment, everything clicked. And I knew my life would never be the same."

🌈 THE TRANSFORMATION (3:00-4:00)
"Within weeks, everything changed. [Share specific results and emotions]. The best part? It wasn't some complicated system or secret formula. It was understanding this one thing about ${topic} that makes all the difference. Let me share exactly what I learned..."

❤️ THE LESSON (4:00-4:30)
"Looking back now, I realize that ${topic} taught me something bigger than I ever imagined... [Share deep insight]. It's not just about the outcome - it's about who you become in the process. And that's something nobody can take away from you."

🎬 EMOTIONAL CLOSE (4:30-5:00)
"So that's my story with ${topic}. And now I want to know - what's yours going to be? Will this be the moment you decide to take action? Drop a comment and tell me your story. Let's inspire each other. Because we're all in this together. Hit subscribe to follow my journey, and I'll see you in the next chapter of yours. You've got this."

🎵 [End with inspiring music]
`.trim(),

  educational: (topic) => `
🎬 EDUCATIONAL HOOK (0:00-0:15)
"Did you know that ${topic} is one of the most misunderstood concepts out there? In the next 5 minutes, I'm going to teach you what most people never learn - and it's going to fascinate you!"

🧠 FRAME THE TOPIC (0:15-0:45)
"Let me start by asking: What do you actually know about ${topic}? Most people have heard of it, but very few understand how it really works. Today, we're going deep - in a way that's actually fun and easy to understand. Ready? Let's go!"

📚 CONCEPT #1 (0:45-1:45)
"First, let's break down the foundation of ${topic}... [Explain core concept clearly]. Think of it like this: [Use analogy]. Makes sense, right? This is the building block everything else stands on. Once you understand THIS, everything else becomes crystal clear."

💡 FASCINATING FACT (1:45-2:00)
"Here's something cool that'll blow your mind... [Share interesting fact]. Pretty amazing, isn't it? Drop a 🤯 if that surprised you!"

🔬 CONCEPT #2 (2:00-3:00)
"Now let's layer on the next level... [Explain second concept]. This is where ${topic} gets really interesting. You see, [connect to real-world application]. This is why understanding this matters - it affects your life more than you realize!"

🎓 PRACTICAL EXAMPLES (3:00-4:00)
"Let me give you some concrete examples... Example #1: [Clear example]. Example #2: [Relatable scenario]. Example #3: [Surprising application]. See how this all connects? ${topic} is everywhere once you know what to look for!"

🚀 HOW TO USE IT (4:00-4:30)
"So how can YOU use this knowledge? Here are three immediate applications: One - [practical tip]. Two - [actionable advice]. Three - [game-changing insight]. Start with just one of these and you'll already be ahead of 90% of people!"

🎬 EDUCATIONAL CLOSE (4:30-5:00)
"And there you have it - a complete breakdown of ${topic} in just 5 minutes! You now know more than most people ever will about this. If you found this fascinating, hit that like button, subscribe for more educational content that actually makes sense, and comment what topic you want me to break down next! Keep learning, keep growing, and I'll see you in the next one!"

🎵 [End with upbeat educational music]
`.trim(),

  comedy: (topic) => `
🎬 COMEDY HOOK (0:00-0:15)
"Alright, let's talk about ${topic}... and I'm just gonna say it - we've ALL been doing this wrong and it's absolutely RIDICULOUS! Let me explain why this is both hilarious and important..."

😂 SETUP THE JOKE (0:15-0:45)
"So picture this... You're trying to understand ${topic}, right? And everyone's out here acting like they're experts. Meanwhile, I'm over here like... 'Wait, THAT'S what we're supposed to do?!' It's like watching someone try to parallel park for the first time - entertaining but also painful!"

🤣 OBSERVATION #1 (0:45-1:45)
"Here's the thing about ${topic} that nobody talks about... [Share funny observation]. I mean, seriously? Who came up with this? It's like they sat in a room and said, 'How can we make this as confusing as possible?' Mission accomplished, guys! But here's what's ACTUALLY going on... [Explain with humor]."

💥 RELATABLE MOMENT (1:45-2:15)
"Can we just be honest for a second? We've ALL had that moment with ${topic} where... [Share relatable funny scenario]. If you've experienced this, drop a 😂 in the comments because misery loves company!"

🎭 OBSERVATION #2 (2:15-3:15)
"But wait, it gets better! [Share second funny insight about topic]. I can't make this stuff up! It's like ${topic} exists purely to mess with us. You know what I mean? It's that thing where you think you finally understand it, and then BAM! [Describe comedic twist]."

🎪 THE TWIST (3:15-4:00)
"Now here's the plot twist... Despite all this chaos and confusion, ${topic} is actually pretty important. I know, I know - I didn't want to believe it either! But seriously, once you get past the absurdity, there's actually some valuable stuff here. Let me break it down in a way that won't make your brain hurt..."

😄 PRACTICAL HUMOR (4:00-4:30)
"So here's what you actually need to know: [Share useful info with comedic delivery]. That's it! That's literally it! We could've saved SO much time if someone had just said this from the beginning. But nooo, we had to make it complicated!"

🎬 COMEDY CLOSE (4:30-5:00)
"And that's the truth about ${topic} - it's ridiculous, it's confusing, but at least now you understand it! If this made you laugh AND learn something, that's what we call a win-win! Smash that like button, subscribe for more content that makes learning actually enjoyable, and comment your own funny stories about ${topic}. Trust me, I need more material! See you next time, and remember - life's too short to take everything seriously!"

🎵 [End with upbeat comedy music and funny outtake]
`.trim()
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic, style } = req.body;

  if (!topic || !topic.trim()) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  const generator = scriptTemplates[style] || scriptTemplates.energetic;
  const script = generator(topic.trim());

  res.status(200).json({ script });
}
