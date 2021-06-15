***JSON Body***

URL = **http://localhost:4000**

# Auth
1. Login **/auth/login**
{
  "email": "yudhatama7@gmail.com",
  "password": "ido123"
}

# Pegawai
1. Create **/pegawai/create**
{
  "fullName": "Mamad",
  "email": "mamad@mail.com",
  "telp": "086777550000",
  "password": "mamad123",
  "idrole": 3,
  "idposisi": 5
}

2. Read **/pegawai/get**

3. Update **/pegawai/update**
{
  "fullName": "Mamad Haha",
  "email": "mamad@mail.com",
  "telp": "086777550001",
  "password": "mamad123",
  "idrole": 3
}

4. Delete **/delete/:id**
:(id)

# Jobtask
1. Create **/jobtask/create** 
{
  "idpegawai": 5,
  "jobtask": "Selling product",
  "deadline": "2021-12-12"
}

2. Read all **/jobtask/get-all** 

3. Read by id **/jobtask/get/4** 

4. Update **/jobtask/update** 
{
  "idpegawai": 5,
  "jobtask": "Selling product",
  "deadline": "2021-12-12"
}

5. Delete **/jobtask/delete/5** 

# Get all Jobtask **/jobtask/get-all** 

# Get position **/posisi/:posisi** 