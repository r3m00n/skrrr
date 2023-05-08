export type Card = { value: number; visible: boolean; id: string };

export type Deck = Card[];

export type Column = [Card, Card, Card];

export type StartCards = [Column, Column, Column, Column];
