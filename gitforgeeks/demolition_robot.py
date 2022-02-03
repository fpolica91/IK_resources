from collections import deque
def demolition_robot(grid):
    if not grid or not grid[0]: return -1
    directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    queue = deque([(0, [0, 0])])

    while queue:
        (dist, loc) = queue.pop()
        if grid[loc[0]][loc[1]] == 9: return dist
        
        for dir in directions:
            new_row, new_col = loc[0] + dir[0], loc[1] + dir[1]
            if 0 <= new_row < len(grid) and 0 <= new_col < len(grid[0]) and grid[new_row][new_col] != 0:
                queue.appendleft((dist + 1, [new_row, new_col]))
    
    return -1
