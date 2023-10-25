import React, { Component } from 'react';

class TextAnalyzer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      words: 0,
      characters: 0,
      sentences: 0,
      paragraphs: 0,
      averageReadingTime: 0,
      longestWord: '',
      pronouns: ['I', 'you', 'he', 'she', 'it', 'we', 'they'], // Add more pronouns as needed
      pronounCount: 0,
    };
  }

  handleTextChange = (e) => {
    const text = e.target.value;

    // Count words, characters, sentences, and paragraphs
    const words = text.split(/\s+/).filter((word) => word !== '').length;
    const characters = text.length;
    const sentences = text.split(/[.!?]/).length - 1;
    const paragraphs = text.split('\n').filter((p) => p !== '').length;

    // Calculate average reading time (assumes 200 words per minute)
    const averageReadingTime = words / 200;

    // Find the longest word in paragraphs
    const wordsInParagraphs = text.split('\n').map((p) => p.split(/\s+/));
    const longestWord = wordsInParagraphs
      .map((words) => {
        return words.reduce((longest, current) =>
          current.length > longest.length ? current : longest
        );
      })
      .reduce((longest, current) =>
        current.length > longest.length ? current : longest
      );

    // Count pronouns
    const pronounCount = this.state.pronouns.reduce((count, pronoun) => {
      const re = new RegExp(`\\b${pronoun}\\b`, 'gi');
      return count + (text.match(re) || []).length;
    }, 0);

    this.setState({
      text,
      words,
      characters,
      sentences,
      paragraphs,
      averageReadingTime,
      longestWord,
      pronounCount,
    });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleTextChange}
          value={this.state.text}
          placeholder="Enter text here..."
        />
        <div>
          <p>Words: {this.state.words}</p>
          <p>Characters: {this.state.characters}</p>
          <p>Sentences: {this.state.sentences}</p>
          <p>Paragraphs: {this.state.paragraphs}</p>
          <p>Average Reading Time: {this.state.averageReadingTime} minutes</p>
          <p>Longest Word in Paragraphs: {this.state.longestWord}</p>
          <p>Pronouns: {this.state.pronounCount}</p>
        </div>
      </div>
    );
  }
}

export default TextAnalyzer;
