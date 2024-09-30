//streams-->they are kind of array of data
//streams are used if we have huge amount of data to process in code
//if a file is requested then we can fulfill it using streams-->we should read the file as a stream and write the file as a stream
//in this way our application will noit consume size of file in memory
//one chunk at a time is passsed through stream
//node http pkg is stream ready
//we can create our oen stream using the stream package
//zip,crypto function uses streams

//scaling:done through cluster module
//pm is a wrapper around a cluster module