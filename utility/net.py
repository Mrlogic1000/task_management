from netmiko import ConnectHandler
router = {
    "device_type": "mikrotik_routeros",
    "ip": "172.30.99.1",
    "username": "muis",
    "password": "m1000"

}

# commands = ['/interface bridge add name=local', 
# '/interface bridge port add interface=ether2 bridge=local',
# '/ip address add address=192.168.1.1/24 interface=local']
device = ConnectHandler(**router)

# commands = 1
# test = device.send_config_set(commands)
dhcp = (device.send_command("/ip neighbor print").split(' '))
# print(dhcp)
# for ether in dhcp:
#     print(ether)
# print(dhcp)cl
# for d in dhcp:
#     print(d)

d = []
for i in dhcp[4:]:
    if len(i) != 0:
        d.append(i)
        print(i)

print(d)

# for i in range(4,len(dhcp),3):
#     x = i
#     print(dhcp[x:x+3])
      
  
device.disconnect()