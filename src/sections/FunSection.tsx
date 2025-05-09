import React, { useEffect, useState, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { BrainCircuit, Terminal, RefreshCw, Smile } from 'lucide-react';

const QuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);
  
  const aiQuotes = [
    { text: "The development of full artificial intelligence could spell the end of the human race.", author: "Stephen Hawking" },
    { text: "AI is the new electricity.", author: "Andrew Ng" },
    { text: "AI doesn't have to be evil to destroy humanity — if AI has a goal and humanity just happens to come in the way, it will destroy humanity as a matter of course without even thinking about it, no hard feelings.", author: "Elon Musk" },
    { text: "The real question is, when will we draft an artificial intelligence bill of rights? What will that consist of? And who will get to decide that?", author: "Gray Scott" },
    { text: "I'm increasingly inclined to think that there should be some regulatory oversight, maybe at the national and international level, just to make sure that we don't do something very foolish.", author: "Elon Musk" },
    { text: "The pace of progress in artificial intelligence is incredibly fast.", author: "Satya Nadella" },
    { text: "Artificial intelligence is growing up fast, as are robots whose facial expressions can elicit empathy and make your mirror neurons quiver.", author: "Diane Ackerman" },
    { text: "Some people call this artificial intelligence, but the reality is this technology will enhance us. So instead of artificial intelligence, I think we'll augment our intelligence.", author: "Ginni Rometty" },
    { text: "The key to artificial intelligence has always been the representation.", author: "Jeff Hawkins" },
    { text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "Edsger W. Dijkstra" },
  ];
  
  const getRandomQuote = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * aiQuotes.length);
      setQuote(aiQuotes[randomIndex]);
      setIsLoading(false);
    }, 800);
  };
  
  useEffect(() => {
    getRandomQuote();
  }, []);
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <BrainCircuit size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
        AI Quote Generator
      </h3>
      
      <div className="min-h-32 mb-6 flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center text-slate-500 dark:text-slate-400">
            <RefreshCw size={32} className="animate-spin mb-2" />
            <span>Generating wisdom...</span>
          </div>
        ) : (
          <blockquote className="text-slate-700 dark:text-slate-300 text-center">
            <p className="text-lg italic mb-2">"{quote.text}"</p>
            <footer className="text-blue-600 dark:text-blue-400 font-medium">— {quote.author}</footer>
          </blockquote>
        )}
      </div>
      
      <button
        onClick={getRandomQuote}
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded-lg transition-colors ${
          isLoading 
            ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        Generate New Quote
      </button>
    </div>
  );
};

const CodeSnippet: React.FC = () => {
  const snippets = [
    {
      language: "Python",
      title: "Building a Neural Network",
      code: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Create a sequential model
model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
model.fit(x_train, y_train, epochs=5, validation_data=(x_test, y_test))`
    },
    {
      language: "JavaScript",
      title: "Using TensorFlow.js",
      code: `import * as tf from '@tensorflow/tfjs';

// Define a model
const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'linear'}));

// Prepare the model for training
model.compile({
  optimizer: tf.train.adam(),
  loss: 'meanSquaredError',
  metrics: ['accuracy']
});

// Generate some synthetic data
const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);

// Train the model
model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: (epoch, logs) => console.log(\`Epoch: \${epoch} Loss: \${logs.loss}\`)
  }
});`
    },
    {
      language: "Python",
      title: "Text Classification with BERT",
      code: `from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load pre-trained model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

# Tokenize input text
text = "This is an example of text classification using BERT."
encoded_input = tokenizer(text, return_tensors='pt')

# Forward pass through the model
with torch.no_grad():
    outputs = model(**encoded_input)
    predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
    
print(f"Class probabilities: {predictions}")`
    }
  ];
  
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const snippet = snippets[currentSnippet];
  
  const cycleSnippet = () => {
    setCurrentSnippet((current) => (current + 1) % snippets.length);
  };
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <Terminal size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
        {snippet.title} <span className="ml-2 text-sm font-normal text-blue-600 dark:text-blue-400">({snippet.language})</span>
      </h3>
      
      <div className="bg-slate-800 rounded-lg p-4 mb-4 overflow-x-auto">
        <pre className="text-slate-200 text-sm">
          <code>{snippet.code}</code>
        </pre>
      </div>
      
      <button
        onClick={cycleSnippet}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Next Code Snippet
      </button>
    </div>
  );
};

// Simple Tic Tac Toe game
const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  
  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    if (squares.every(square => square !== null)) {
      return 'draw';
    }
    
    return null;
  };
  
  const winner = calculateWinner(board);
  
  const handleClick = (i: number) => {
    if (board[i] || gameOver) return;
    
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    
    if (calculateWinner(newBoard)) {
      setGameOver(true);
    }
  };
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
  };
  
  const renderSquare = (i: number) => {
    return (
      <button 
        className={`w-14 h-14 text-2xl font-bold rounded-md flex items-center justify-center transition-colors 
          ${board[i] === 'X' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
            board[i] === 'O' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 
            'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
        Tic Tac Toe
      </h3>
      
      <div className="mb-4 text-center">
        {winner ? (
          <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-4">
            {winner === 'draw' ? 
              "It's a draw!" : 
              `Player ${winner} wins!`}
          </div>
        ) : (
          <div className="p-2 mb-4 text-slate-700 dark:text-slate-300">
            Next player: {xIsNext ? 'X' : 'O'}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-2 max-w-fit mx-auto mb-6">
        {[...Array(9)].map((_, i) => (
          <div key={i}>{renderSquare(i)}</div>
        ))}
      </div>
      
      <button
        onClick={resetGame}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Reset Game
      </button>
    </div>
  );
};

const GuessTheTerm: React.FC = () => {
  const terms = [
    { term: 'Neural Network', hint: 'A system of algorithms modeled after the human brain.' },
    { term: 'Reinforcement Learning', hint: 'Learning by trial and error to maximize rewards.' },
    { term: 'GAN', hint: 'A type of neural network used to generate realistic images.' },
    { term: 'Overfitting', hint: 'When a model performs well on training data but poorly on unseen data.' },
    { term: 'Backpropagation', hint: 'A method used to calculate gradients in neural networks.' },
    { term: 'Gradient Descent', hint: 'An optimization algorithm to minimize loss functions.' },
  ];

  const [currentTerm, setCurrentTerm] = useState(terms[0]);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setCurrentTerm(terms[Math.floor(Math.random() * terms.length)]);
  }, []);

  const handleGuess = () => {
    if (guess.toLowerCase() === currentTerm.term.toLowerCase()) {
      setFeedback('Correct! 🎉');
      setTimeout(() => {
        setCurrentTerm(terms[Math.floor(Math.random() * terms.length)]);
        setGuess('');
        setFeedback('');
      }, 2000);
    } else {
      setFeedback('Try again! 😅');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <Smile size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
        Guess the AI Term
      </h3>

      <p className="text-slate-700 dark:text-slate-300 mb-4">Hint: {currentTerm.hint}</p>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="w-full px-4 py-2 mb-4 rounded-lg border border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
        placeholder="Your guess..."
      />

      <button
        onClick={handleGuess}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Submit Guess
      </button>

      {feedback && (
        <p className="mt-4 text-lg font-medium text-blue-600 dark:text-blue-400">{feedback}</p>
      )}
    </div>
  );
};

const FunSection: React.FC = () => {
  return (
    <section id="fun" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Just For Fun" 
          subtitle="Take a break and enjoy these interactive elements." 
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <QuoteGenerator />
          <CodeSnippet />
          <TicTacToe />
          <GuessTheTerm />
        </div>
      </div>
    </section>
  );
};

export default FunSection;