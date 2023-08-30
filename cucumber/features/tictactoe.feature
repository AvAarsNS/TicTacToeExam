Feature: Winning at tic tac toe

Scenario: Player X wins with a horizontal victory in the middle
	Given two players play a game of tic tac toe
    And player X places an X at (1,1)
    And player O places an O at (0,0)
    And player X places an O at (1,0)
    And player O places an O at (0,1)
	When player X places an O at (2,0)
    Then player X wins the game