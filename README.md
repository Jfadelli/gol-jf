# Conway's Game Of Life - a Lambda School Project - By: Jason Fadelli
         ________  ________  ________   ___       __   ________      ___    ___ ________      
        |\   ____\|\   __  \|\   ___  \|\  \     |\  \|\   __  \    |\  \  /  /|\   ____\     
        \ \  \___|\ \  \|\  \ \  \\ \  \ \  \    \ \  \ \  \|\  \   \ \  \/  / | \  \___|_    
         \ \  \    \ \  \\\  \ \  \\ \  \ \  \  __\ \  \ \   __  \   \ \    / / \ \_____  \   
          \ \  \____\ \  \\\  \ \  \\ \  \ \  \|\__\_\  \ \  \ \  \   \/  /  /   \|____|\  \  
           \ \_______\ \_______\ \__\\ \__\ \____________\ \__\ \__\__/  / /       ____\_\  \ 
            \|_______|\|_______|\|__| \|__|\|____________|\|__|\|__|\___/ /       |\_________\
                                                                   \|___|/        \|_________|
     ________  ________  _____ ______   _______        ________  ________      ___       ___  ________ _______      
    |\   ____\|\   __  \|\   _ \  _   \|\  ___ \      |\   __  \|\  _____\    |\  \     |\  \|\  _____\\  ___ \     
    \ \  \___|\ \  \|\  \ \  \\\__\ \  \ \   __/|     \ \  \|\  \ \  \__/     \ \  \    \ \  \ \  \__/\ \   __/|    
     \ \  \  __\ \   __  \ \  \\|__| \  \ \  \_|/__    \ \  \\\  \ \   __\     \ \  \    \ \  \ \   __\\ \  \_|/__  
      \ \  \|\  \ \  \ \  \ \  \    \ \  \ \  \_|\ \    \ \  \\\  \ \  \_|      \ \  \____\ \  \ \  \_| \ \  \_|\ \ 
       \ \_______\ \__\ \__\ \__\    \ \__\ \_______\    \ \_______\ \__\        \ \_______\ \__\ \__\   \ \_______\
        \|_______|\|__|\|__|\|__|     \|__|\|_______|     \|_______|\|__|         \|_______|\|__|\|__|    \|_______|
                     
                                                         __ _                                         
                                                        / _` |                                        
                                                       | (_| |                                        
                                                        \__,_|                                        
                    _                     _         _          _____      _                 _  
                   | |                   | |       | |        / ____|    | |               | | 
                   | |     __ _ _ __ ___ | |__   __| | __ _  | (___   ___| |__   ___   ___ | | 
                   | |    / _` | '_ ` _ \| '_ \ / _` |/ _` |  \___ \ / __| '_ \ / _ \ / _ \| | 
                   | |___| (_| | | | | | | |_) | (_| | (_| |  ____) | (__| | | | (_) | (_) | | 
                   |______\__,_|_| |_| |_|_.__/ \__,_|\__,_| |_____/ \___|_| |_|\___/ \___/|_| 
                         _____           _           _                       
                        |  __ \         (_)         | |                      
                        | |__) | __ ___  _  ___  ___| |_                     
                        |  ___/ '__/ _ \| |/ _ \/ __| __|                    
                        | |   | | | (_) | |  __/ (__| |_                     
                        |_|   |_|  \___/| |\___|\___|\__|                    
                                       _/ |                                  
                                      |__/                                  
                                         
                                 ____                     _                           ______        _      _ _ _ 
                                |  _ \         _         | |                         |  ____|      | |    | | (_)
                                | |_) |_   _  (_)        | | __ _ ___  ___  _ __     | |__ __ _  __| | ___| | |_ 
                                |  _ <| | | |        _   | |/ _` / __|/ _ \| '_ \    |  __/ _` |/ _` |/ _ \ | | |
                                | |_) | |_| |  _    | |__| | (_| \__ \ (_) | | | |   | | | (_| | (_| |  __/ | | |
                                |____/ \__, | (_)    \____/ \__,_|___/\___/|_| |_|   |_|  \__,_|\__,_|\___|_|_|_|
                                        __/ |                                                                    
                                       |___/                                                                     



## Introction
    Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine. [1]

    If you are interested in using the application that I have created, it can be found here ____. The instructions are below. 

    Instructions:
        This is a zero player game. The only control given are the initial parameters. 
        
        The game will automatically load with a randomly seeded board. The rules that the game follows to decide how the board will behave, are as follows:
            1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
            2. Any live cell with two or three live neighbours lives on to the next generation.
            3. Any live cell with more than three live neighbours dies, as if by overpopulation.
            4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

        These rules can be distilled into the following:
            1. Any live cell with two or three live neighbours survives.
            2. Any dead cell with three live neighbours becomes a live cell.
            3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

        Controls:
            Play: Sets the game into motion.
            Pause: Pauses the game.
            Clear: Clears the game board.
            Seed: Randomly generates a new seed.
            Step Forward: Ticks the game forward one generation.
            Speed: Chooses the rate at with the generations progress.
            Size: selects the size of the game board.

## The Assignment
    I was tasked with recreating the Game of Life (GOL) in whatever language I saw fit. So far with my education at lambda I have had experience with, HTML, CSS, Javascript, mostly in the form of React, and with Python. I elected to complete the task using React, as that is the language that I am most framiliar with. 

### My Though Process
    Initial planning lead me to outline several basic components that I would need to create in order to replicate Conway's GOL. Those components are as follows:
1. Game board
2. Box/Cell
3. Selection Method
4. Play Method
5. Various Controls

#### Component Design

    1. The Game Board
        The gameboard is constructed of a react class called Grid. It is initialized as an array of rows with a nested for loop that creates an array of columns and uniquly identifies each cell as boxId i_j.
    
    2. The Box/Cell
        Each box is passed in from the array as props and is renderd as a div that contains a unique ID and allows the onclick event, select box. 

        The select box, triggers both a value of true, and tells the CSS to either render the box as, white (off state) or green (on state)

    3. The Selection Method
        Per the design spec the selection method needed to buffer the existing array and my selection method follows that guidline. The function clones the array with a helper function (it uses a cool trick that leverages parse and stringify) and checks to see if they new buffered array has any changes. Once it determines that the array does have a difference, it overwrites the original "current" array.

    4. Play Method
        

    _Sources_
    [1] https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    [2] https://www.youtube.com/watch?v=PM0_Er3SvFQ