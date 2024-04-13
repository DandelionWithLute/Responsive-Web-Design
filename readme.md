The new Journey to enhance my Frontend Skills!
This is my own modification version of Lama's work.
There might be some parody stuffs.

1rem = 4 tailwindcss unit = 16px

Next.js Animated Portfolio Website with Framer Motion & Tailwind CSS | Next.js Beginner Project
https://www.youtube.com/watch?v=DJaZUFK8Kv4

Busy Writing Marketing Articles today...

Use the ring-* utilities to apply solid box-shadow of a specific thickness to an element. Rings are a semi-transparent blue color by default, similar to the default focus ring style in many systems.
https://tailwindcss.com/docs/ring-width

AnimatePresence
Animate components when they're removed from the React tree.
https://www.framer.com/motion/animate-presence/

transitionProvider
https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_auto
the division will be centred due to margin:auto;

w-fit
width:fit-content;
https://developer.mozilla.org/en-US/play

vscode text wrap
press ALT + Z Key

<motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          >
</motion.div>

const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
