output "project_name" {
  value = var.project_name
}
output "vpc_id" {
  value = aws_vpc.main.id
}
output "public_subnet_ids" {
  value = [
    aws_subnet.public_1.id,
    aws_subnet.public_2.id
  ]
}

output "private_subnet_ids" {
  value = [
    aws_subnet.private_1.id,
    aws_subnet.private_2.id
  ]
}

output "internet_gateway_id" {
  value = aws_internet_gateway.igw.id
}

output "nat_gateway_id" {
  value = aws_nat_gateway.nat.id
}

output "eks_cluster_name" {
  value = aws_eks_cluster.main.name
}

output "eks_node_group_name" {
  value = aws_eks_node_group.main.node_group_name
}